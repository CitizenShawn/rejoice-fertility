import React, { useEffect } from "react"

export default function Countdown() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.logwork.com/widget/countdown.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <a
      href="https://logwork.com/countdown-timer"
      className="countdown-timer"
      data-timezone="America/New_York"
      data-textcolor="#343753"
      data-date="2026-09-01 11:32"
      data-background="#343753"
      data-digitscolor="#FFFFFF"
      data-unitscolor="#343753"
    >
      We're Coming to Nashville
    </a>
  )
}
