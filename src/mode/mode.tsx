'use client'
import { createContext, useEffect, useState, useContext, PropsWithChildren, FC } from 'react'

const getThemeMode = () => {
	if (typeof window === "undefined") return "light"
	const mode = localStorage.getItem("mode")
	if (mode === "light" || mode === "dark") {
		return mode
	}
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return "dark"
	} else {
		return "light"
	}
}

type ModeContextT = {
	mode: "light" | "dark",
	setLightMode: () => void,
	setDarkMode: () => void,
}

const Mode = createContext<ModeContextT>({
	mode: getThemeMode(),
	setLightMode: () => { },
	setDarkMode: () => { },
})

export const ModeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [mode, setMode] = useState<ModeContextT["mode"]>(getThemeMode())
	const setLightMode = () => {
		if (typeof window === "undefined") return
		localStorage.setItem("mode", "light")
		setMode("light")
	}
	const setDarkMode = () => {
		if (typeof window === "undefined") return
		localStorage.setItem("mode", "dark")
		setMode("dark")
	}

	useEffect(() => {
		document.documentElement.classList.remove(mode === "light" ? "dark" : "light")
		document.documentElement.classList.add(mode === "light" ? "light" : "dark")
	}, [mode])

	return (
		<Mode.Provider value={{ mode, setDarkMode, setLightMode }}>{children}</Mode.Provider>
	)
}

export const useMode = () => {
	return useContext(Mode)
}

export default ModeProvider