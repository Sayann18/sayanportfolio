import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi2'
import ProjectCard from './ProjectCard'

const SIDE_OFFSET_DESKTOP = 86
const SIDE_OFFSET_TABLET = 94
const SIDE_OFFSET_MOBILE = 97

const SLIDE_DURATION_DESKTOP = 0.56 
const SLIDE_DURATION_MOBILE = 0.5 
const SLIDE_EASE = [0.22, 0.61, 0.36, 1]

const SWIPE_THRESHOLD = 48

const normalize = (index, total) => {
  return (index + total) % total
}
const useResponsiveCarouselMetrics = () => {
  const [metrics, setMetrics] = useState({
    sideOffset: SIDE_OFFSET_DESKTOP,
    duration: SLIDE_DURATION_DESKTOP,
  })

  useEffect(() => {
    const mqMobile = window.matchMedia('(max-width: 560px)')
    const mqTablet = window.matchMedia('(max-width: 860px)')

    const update = () => {
      if (mqMobile.matches) {
        setMetrics({
          sideOffset: SIDE_OFFSET_MOBILE,
          duration: SLIDE_DURATION_MOBILE,
        })
      } else if (mqTablet.matches) {
        setMetrics({
          sideOffset: SIDE_OFFSET_TABLET,
          duration: SLIDE_DURATION_MOBILE,
        })
      } else {
        setMetrics({
          sideOffset: SIDE_OFFSET_DESKTOP,
          duration: SLIDE_DURATION_DESKTOP,
        })
      }
    }

    update()
    mqMobile.addEventListener('change', update)
    mqTablet.addEventListener('change', update)

    return () => {
      mqMobile.removeEventListener('change', update)
      mqTablet.removeEventListener('change', update)
    }
  }, [])

  return metrics
}

const ProjectFlipbook = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const [isAnimating, setIsAnimating] = useState(false)
  const [focused, setFocused] = useState(false)

  const touchStartX = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const { sideOffset, duration } = useResponsiveCarouselMetrics()
  const total = projects.length

  const goTo = useCallback(
    (destination, dir) => {
      if (isAnimating || total < 2 || destination === currentIndex) {
        return
      }

      setDirection(dir)
      setIsAnimating(true)
      setCurrentIndex(destination)
    },
    [currentIndex, isAnimating, total],
  )

  const goNext = useCallback(() => {
    goTo(normalize(currentIndex + 1, total), 'next')
  }, [currentIndex, goTo, total])

  const goPrevious = useCallback(() => {
    goTo(normalize(currentIndex - 1, total), 'previous')
  }, [currentIndex, goTo, total])

  useEffect(() => {
    if (!focused) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goNext()
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goPrevious()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [focused, goNext, goPrevious])

  const onTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
    const delta = endX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(delta) < SWIPE_THRESHOLD) return

    if (delta < 0) {
      goNext()
    } else {
      goPrevious()
    }
  }

  const slideVariants = useMemo(
    () =>
      shouldReduceMotion
        ? {
            enter: { opacity: 0 },
            center: {
              opacity: 1,
              transition: { duration: 0.2, ease: 'linear' },
            },
            exit: {
              opacity: 0,
              transition: { duration: 0.2, ease: 'linear' },
            },
          }
        : {
            enter: (dir) => ({
              x: dir === 'next' ? `${sideOffset}%` : `-${sideOffset}%`,
              opacity: 1,
            }),
            center: {
              x: '0%',
              opacity: 1,
              transition: { duration, ease: SLIDE_EASE },
            },
            exit: (dir) => ({
              x: dir === 'next' ? '-100%' : '100%',
              opacity: 1,
              transition: { duration, ease: SLIDE_EASE },
            }),
          },
    [shouldReduceMotion, sideOffset, duration],
  )

  if (!projects.length) {
    return null
  }

  const currentProject = projects[currentIndex]
  const nextIndex = normalize(currentIndex + 1, total)
  const previousIndex = normalize(currentIndex - 1, total)
  const nextProject = projects[nextIndex]
  const previousProject = projects[previousIndex]

  return (
    <div
      className="project-flipbook"
      tabIndex={0}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Featured projects carousel"
    >
      <div
        className={`project-flipbook__stage ${
          isAnimating ? 'is-animating' : ''
        }`}
      >
        {total > 1 && (
          <div
            className="project-slide project-slide--peek project-slide--peek-previous"
            aria-hidden="true"
          >
            <ProjectCard project={previousProject} />
          </div>
        )}

        {total > 1 && (
          <div
            className="project-slide project-slide--peek project-slide--peek-next"
            aria-hidden="true"
          >
            <ProjectCard project={nextProject} />
          </div>
        )}

        <div className="project-slider-viewport">
          <div className="project-slide-sizer" aria-hidden="true">
            <ProjectCard project={currentProject} />
          </div>

          <AnimatePresence custom={direction} initial={false} mode="popLayout">
            <motion.div
              key={currentProject.id}
              className="project-slide project-slide--active"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              onAnimationComplete={() => setIsAnimating(false)}
            >
              <ProjectCard project={currentProject} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* LEFT ARROW */}
        <button
          type="button"
          className="project-nav-arrow project-nav-arrow--left"
          onClick={goPrevious}
          disabled={isAnimating || total < 2}
          aria-label="Previous project"
        >
          <HiChevronLeft aria-hidden="true" />
        </button>

        {/* RIGHT ARROW */}
        <button
          type="button"
          className="project-nav-arrow project-nav-arrow--right"
          onClick={goNext}
          disabled={isAnimating || total < 2}
          aria-label="Next project"
        >
          <HiChevronRight aria-hidden="true" />
        </button>
      </div>

      {/* PAGINATION */}
      <div className="project-flipbook__controls">
        <div
          className="project-dots"
          role="tablist"
          aria-label="Select project"
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Show ${project.name}`}
              className={`project-dot ${
                index === currentIndex ? 'project-dot--active' : ''
              }`}
              disabled={isAnimating}
              onClick={() =>
                goTo(index, index > currentIndex ? 'next' : 'previous')
              }
            />
          ))}
        </div>

        <div className="project-counter" aria-live="polite">
          <strong>{String(currentIndex + 1).padStart(2, '0')}</strong>
          <span>/</span>
          <strong>{String(total).padStart(2, '0')}</strong>
          <em>Projects</em>
        </div>
      </div>
    </div>
  )
}

export default ProjectFlipbook