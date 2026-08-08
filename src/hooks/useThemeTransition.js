// import { useCallback, useRef } from 'react'

// const REVEAL_DURATION = 1150
// const REVEAL_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)'

// const getRevealMetrics = (element) => {
//   const rect = element.getBoundingClientRect()
//   const x = rect.left + rect.width / 2
//   const y = rect.top + rect.height / 2
//   const radius = Math.hypot(
//     Math.max(x, window.innerWidth - x),
//     Math.max(y, window.innerHeight - y),
//   )

//   return { x, y, radius }
// }

// const createFallbackLayer = (isDarkMode, { x, y }) => {
//   const layer = document.createElement('div')
//   layer.className = 'theme-reveal-fallback'
//   layer.style.setProperty('--theme-reveal-x', `${x}px`)
//   layer.style.setProperty('--theme-reveal-y', `${y}px`)
//   layer.style.background = isDarkMode ? '#f7f2ea' : '#020617'
//   document.body.appendChild(layer)
//   return layer
// }

// export default function useThemeTransition(isDarkMode, applyTheme) {
//   const isTransitioning = useRef(false)

//   const toggleTheme = useCallback((event) => {
//     if (isTransitioning.current) return

//     const toggle = event?.currentTarget
//     if (!toggle || typeof window === 'undefined') {
//       applyTheme()
//       return
//     }

//     const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
//     const metrics = getRevealMetrics(toggle)
//     isTransitioning.current = true
//     const finish = () => {
//       isTransitioning.current = false
//       toggle.disabled = false
//       toggle.removeAttribute('data-theme-transitioning')
//     }
//     toggle.disabled = true
//     toggle.setAttribute('data-theme-transitioning', 'true')

//     if (prefersReducedMotion) {
//       applyTheme()
//       document.documentElement.animate(
//         { opacity: [0.92, 1] },
//         { duration: 180, easing: 'ease-out' },
//       ).finished.finally(finish)
//       return
//     }

//     if (typeof document.startViewTransition === 'function') {
//       const transition = document.startViewTransition(() => applyTheme())

//       transition.ready
//         .then(() => document.documentElement.animate(
//           {
//             clipPath: [
//               `circle(0px at ${metrics.x}px ${metrics.y}px)`,
//               `circle(${metrics.radius}px at ${metrics.x}px ${metrics.y}px)`,
//             ],
//           },
//           { duration: REVEAL_DURATION, easing: REVEAL_EASING, pseudoElement: '::view-transition-new(root)' },
//         ).finished)
//         .catch(() => undefined)
//         .finally(finish)
//       return
//     }

//     const fallbackLayer = createFallbackLayer(isDarkMode, metrics)
//     fallbackLayer.animate(
//       { clipPath: [`circle(0px at ${metrics.x}px ${metrics.y}px)`, `circle(${metrics.radius}px at ${metrics.x}px ${metrics.y}px)`] },
//       { duration: 970, easing: REVEAL_EASING, fill: 'forwards' },
//     ).finished
//       .then(() => {
//         applyTheme()
//         return fallbackLayer.animate({ opacity: [1, 0] }, { duration: 180, easing: 'ease-out', fill: 'forwards' }).finished
//       })
//       .catch(() => undefined)
//       .finally(() => {
//         fallbackLayer.remove()
//         finish()
//       })
//   }, [applyTheme, isDarkMode])

//   return toggleTheme
// }

import { useCallback, useRef } from 'react'

const REVEAL_DURATION = 1200
const REVEAL_EASING = 'cubic-bezier(0.22, 0.85, 0.32, 1)'

const RADIUS_OVERSHOOT = 150

const getRevealMetrics = (element) => {
  const liveTransform = element.style.transform
  element.style.transform = 'none'
  const rect = element.getBoundingClientRect()
  element.style.transform = liveTransform

  const x = rect.left + rect.width / 2
  const y = rect.top + rect.height / 2

  console.log('[theme-reveal-debug]', {
    measuredElement: element,
    rect,
    x,
    y,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  })

  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  ) + RADIUS_OVERSHOOT

  return { x, y, radius }
}

const createFallbackLayer = (isDarkMode, { x, y }) => {
  const layer = document.createElement('div')
  layer.className = 'theme-reveal-fallback'
  layer.style.setProperty('--theme-reveal-x', `${x}px`)
  layer.style.setProperty('--theme-reveal-y', `${y}px`)
  layer.style.background = isDarkMode ? '#f7f2ea' : '#020617'
  document.body.appendChild(layer)
  return layer
}

export default function useThemeTransition(isDarkMode, applyTheme) {
  const isTransitioning = useRef(false)

  const toggleTheme = useCallback((eventOrElement) => {
    if (isTransitioning.current) return

    const toggle = eventOrElement?.currentTarget ?? eventOrElement

    if (!toggle || typeof window === 'undefined' || typeof toggle.getBoundingClientRect !== 'function') {
      applyTheme()
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const metrics = getRevealMetrics(toggle)
    isTransitioning.current = true

    const finish = () => {
      isTransitioning.current = false
      toggle.disabled = false
      toggle.removeAttribute('data-theme-transitioning')
      document.documentElement.classList.remove('theme-transitioning')
    }

    toggle.disabled = true
    toggle.setAttribute('data-theme-transitioning', 'true')
  
    document.documentElement.classList.add('theme-transitioning')

    if (prefersReducedMotion) {
      applyTheme()
      document.documentElement.animate(
        { opacity: [0.92, 1] },
        { duration: 180, easing: 'ease-out' },
      ).finished.finally(finish)
      return
    }

    if (typeof document.startViewTransition === 'function') {
      const transition = document.startViewTransition(() => applyTheme())

      transition.ready
        .then(() => document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${metrics.x}px ${metrics.y}px)`,
              `circle(${metrics.radius}px at ${metrics.x}px ${metrics.y}px)`,
            ],
          },
          { duration: REVEAL_DURATION, easing: REVEAL_EASING, pseudoElement: '::view-transition-new(root)' },
        ).finished)
        .catch(() => undefined)
        .finally(finish)
      return
    }

    const fallbackLayer = createFallbackLayer(isDarkMode, metrics)
    fallbackLayer.animate(
      { clipPath: [`circle(0px at ${metrics.x}px ${metrics.y}px)`, `circle(${metrics.radius}px at ${metrics.x}px ${metrics.y}px)`] },
      { duration: 970, easing: REVEAL_EASING, fill: 'forwards' },
    ).finished
      .then(() => {
        applyTheme()
        return fallbackLayer.animate({ opacity: [1, 0] }, { duration: 180, easing: 'ease-out', fill: 'forwards' }).finished
      })
      .catch(() => undefined)
      .finally(() => {
        fallbackLayer.remove()
        finish()
      })
  }, [applyTheme, isDarkMode])

  return toggleTheme
}