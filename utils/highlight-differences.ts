// A simple utility to highlight differences between texts
// In a real implementation, this would use a more sophisticated diff algorithm

export function highlightDifferences(original: string, modified: string): string {
  if (!original || !modified) return modified

  // This is a simplified approach for the prototype
  // Split content into paragraphs for comparison
  const originalParagraphs = original.split("<p>").filter((p) => p.trim())
  const modifiedParagraphs = modified.split("<p>").filter((p) => p.trim())

  // Process each paragraph
  const result = modifiedParagraphs.map((modPara, index) => {
    // If we have a corresponding original paragraph
    if (index < originalParagraphs.length) {
      const origPara = originalParagraphs[index]

      // Simple word-based highlighting
      // In a real app, you'd use a proper diff algorithm
      const origWords = origPara.replace(/<\/p>/g, "").split(" ")
      const modWords = modPara.replace(/<\/p>/g, "").split(" ")

      let highlightedPara = "<p>"

      modWords.forEach((word, i) => {
        // Check if this word exists in the original paragraph at a similar position
        const range = 5 // Check words within this range
        const start = Math.max(0, i - range)
        const end = Math.min(origWords.length, i + range)
        const nearbyOrigWords = origWords.slice(start, end)

        // If the word doesn't appear in nearby original words, highlight it
        if (
          !nearbyOrigWords.some(
            (w) => w.toLowerCase().includes(word.toLowerCase()) || word.toLowerCase().includes(w.toLowerCase()),
          )
        ) {
          highlightedPara += `<span class="bg-yellow-200 px-0.5 rounded">${word}</span> `
        } else {
          highlightedPara += word + " "
        }
      })

      highlightedPara = highlightedPara.trim() + "</p>"
      return highlightedPara
    }

    // If this is a new paragraph not in the original, highlight the whole thing
    return `<p><span class="bg-yellow-200 px-0.5 rounded">${modPara.replace(/<\/p>/g, "")}</span></p>`
  })

  return result.join("")
}
