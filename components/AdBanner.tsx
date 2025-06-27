"use client"

import { useEffect } from "react"

interface AdBannerProps {
  slot: string
  format: "horizontal" | "rectangle" | "square"
  className?: string
}

export default function AdBanner({ slot, format, className = "" }: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log("AdSense error:", err)
    }
  }, [])

  const getAdSize = () => {
    switch (format) {
      case "horizontal":
        return { width: "728", height: "90" }
      case "rectangle":
        return { width: "336", height: "280" }
      case "square":
        return { width: "250", height: "250" }
      default:
        return { width: "728", height: "90" }
    }
  }

  const { width, height } = getAdSize()

  return (
    <div className={`text-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
