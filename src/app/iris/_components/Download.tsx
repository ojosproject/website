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
	| "linux-x64";

type AvailableDownloads = {
	[P in AvailablePlatforms]: { label: string; download: string };
};

export default async function Download({
	productName,
	repoPath,
}: DownloadProps) {
	if (!productName && !repoPath) return null;

	const githubResponse = await fetch(
		`https://api.github.com/repos/${repoPath}/releases/latest`,
	);
	const githubData: GithubData = await githubResponse.json();

	async function cleanGithubData(data: GithubData) {
		let availableDownloads: AvailableDownloads = {
			"windows-x64": null,
			"macos-x64": null,
			"macos-aarch64": null,
			"linux-x64": null,
		};

		data.assets.forEach((asset) => {
			if (asset.name.endsWith("amd64.AppImage")) {
				availableDownloads["linux-x64"] = {
					label: "Linux x64",
					download: asset.browser_download_url,
				};
			} else if (asset.name.endsWith("aarch64.dmg")) {
				availableDownloads["macos-aarch64"] = {
					label: "macOS (Apple Silicon)",
					download: asset.browser_download_url,
				};
			} else if (asset.name.endsWith("x64.dmg")) {
				availableDownloads["macos-x64"] = {
					label: "macOS (Intel)",
					download: asset.browser_download_url,
				};
			} else if (asset.name.endsWith("x64-setup.exe")) {
				availableDownloads["windows-x64"] = {
					label: "Windows x64",
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
				<Link href={`https://github.com/${repoPath}`}>Github</Link>!
			</p>
			<ul className={styles.downloadList}>
				{(Object.keys(cleanData) as AvailablePlatforms[]).map((platform) => {
					const targetPlatform = cleanData[platform];

					return (
						<li key={targetPlatform.download}>
							<Link
								className={styles.downloadListItem}
								href={targetPlatform.download}>
								<button className="primary">{targetPlatform.label}</button>
							</Link>
						</li>
					);
				})}
			</ul>
			<p>Latest update: {isoToReadable(githubData.published_at)}</p>
		</section>
	);
}
