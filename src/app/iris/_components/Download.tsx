import Link from "next/link";
import styles from "./Download.module.css";
import { isoToReadable } from "utils/datetime";

type DownloadProps = {
	productName: string;
	repoPath: string;
};

type GithubData = {
	tag_name: string;
	published_at: string;
	target_commitish: string;
	assets: { id: number; name: string; browser_download_url: string }[];
};

type AvailablePlatforms =
	| "windows-x64"
	| "macos-x64"
	| "macos-aarch64"
	| "linux-x64"
	| "linux-aarch64";

type AvailableDownloads = {
	[P in AvailablePlatforms]: { label: string; download: string };
};

export default async function Download({
	productName,
	repoPath,
}: DownloadProps) {
	if (!productName && !repoPath) return null;
	const url = `https://api.github.com/repos/${repoPath}/releases/latest`;
	const githubResponse = await fetch(url);
	const githubData: GithubData = await githubResponse.json();

	async function cleanGithubData(data: GithubData) {
		let availableDownloads: AvailableDownloads = {
			"windows-x64": null,
			"macos-x64": null,
			"macos-aarch64": null,
			"linux-x64": null,
			"linux-aarch64": null,
		};

		data.assets.forEach((asset) => {
			if (asset.name.endsWith("amd64.AppImage")) {
				availableDownloads["linux-x64"] = {
					label: "AppImage (x64)",
					download: asset.browser_download_url,
				};
			} else if (asset.name.endsWith("aarch64.dmg")) {
				availableDownloads["macos-aarch64"] = {
					label: "Apple Silicon",
					download: asset.browser_download_url,
				};
			} else if (asset.name.endsWith("x64.dmg")) {
				availableDownloads["macos-x64"] = {
					label: "Intel",
					download: asset.browser_download_url,
				};
			} else if (asset.name.endsWith("x64-setup.exe")) {
				availableDownloads["windows-x64"] = {
					label: "x64",
					download: asset.browser_download_url,
				};
			} else if (asset.name.endsWith("aarch64.AppImage")) {
				availableDownloads["linux-aarch64"] = {
					label: "AppImage (ARM)",
					download: asset.browser_download_url,
				};
			}
		});

		return availableDownloads;
	}

	const cleanData = await cleanGithubData(githubData);

	return (
		<section id="download" className={styles.downloadProduct}>
			<h2>Download {productName}</h2>
			<p>
				{productName} is on{" "}
				<Link
					target="_blank"
					rel="noopener noreferrer"
					href={`https://github.com/${repoPath}`}>
					Github
				</Link>
				!
			</p>
			<div className={styles.downloadPicker}>
				<div className={styles.platformGroup}>
					<h3>Windows</h3>
					<div>
						<Link
							className={styles.downloadListItem}
							href={cleanData["windows-x64"].download}>
							<button className="primary">
								{cleanData["windows-x64"].label}
							</button>
						</Link>
					</div>
				</div>

				<div className={styles.platformGroup}>
					<h3>macOS</h3>
					<div>
						<Link
							className={styles.downloadListItem}
							href={cleanData["macos-aarch64"].download}>
							<button className="primary">
								{cleanData["macos-aarch64"].label}
							</button>
						</Link>
						<Link
							className={styles.downloadListItem}
							href={cleanData["macos-x64"].download}>
							<button className="secondary">
								{cleanData["macos-x64"].label}
							</button>
						</Link>
					</div>
				</div>
				<div className={styles.platformGroup}>
					<h3>Linux</h3>
					<div>
						<Link
							className={styles.downloadListItem}
							href={cleanData["linux-x64"].download}>
							<button className="primary">
								{cleanData["linux-x64"].label}
							</button>
						</Link>
					</div>
				</div>
			</div>
			<p>{isoToReadable(githubData.published_at)}</p>
		</section>
	);
}
