"use client";
import { useState, useEffect } from "react";

export function useIsMobile() {
	const mediaQuery = `(max-width: 30rem)`;
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		const mql = window.matchMedia(mediaQuery);
		const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

		// Set initial value
		setIsMobile(mql.matches);

		// Listen for changes
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, [mediaQuery]);

	return isMobile;
}
