import React from 'react'

function Typing({ words = ["Developer", "Programmer", "Coder"], typingSpeed = 120, pause = 1200, className = '' }) {
  const [index, setIndex] = React.useState(0)
  const [subIndex, setSubIndex] = React.useState(0)
  const [blink, setBlink] = React.useState(true)
  const [reverse, setReverse] = React.useState(false)

  // typing effect
  React.useEffect(() => {
    if (index >= words.length) return

    if (subIndex === words[index].length + 1 && !reverse) {
      // finished typing, pause then delete
      const timeout = setTimeout(() => setReverse(true), pause)
      return () => clearTimeout(timeout)
    }

    if (subIndex === 0 && reverse) {
      // finished deleting, move to next word
      const timeout = setTimeout(() => {
        setReverse(false)
        setIndex((prev) => (prev + 1) % words.length)
      }, 200)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? typingSpeed / 2 : typingSpeed)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words, typingSpeed, pause])

  // blinking caret
  React.useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <span className={"typing inline-flex items-center " + className}>
      <span className="text-violet-200 font-semibold">{words[index].substring(0, Math.max(0, subIndex))}</span>
      <span className="ml-1 text-violet-300" style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  )
}

export default Typing
