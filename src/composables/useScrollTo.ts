export function useScrollTo() {
  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (!element) return

    const headerOffset = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--header-height'),
      10,
    )

    const top = element.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return { scrollToSection }
}
