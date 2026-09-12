import { memo, useState } from 'react'
import {
  HiArrowTopRightOnSquare,
  HiCheckCircle,
  HiCodeBracket,
} from 'react-icons/hi2'

const ProjectCard = ({ project }) => {
  const [imageFailed, setImageFailed] = useState(false)

  const hasGithubUrl = Boolean(project.githubUrl)

  const openGithub = () => {
    if (!project.githubUrl) return

    window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card__shine" aria-hidden="true" />

      {/* HEADER */}
      <header className="project-card__header">
        <div className="project-card__identity">
          <div className="project-card__logo" aria-hidden="true">
            {project.accent === 'verifai' ? 'V' : 'P'}
          </div>

          <div className="project-card__name-block">
            <div className="project-card__title-line">
              <h3>{project.name}</h3>

              <span className="project-status">
                <HiCheckCircle aria-hidden="true" />
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="project-card__grid">
        {/* LEFT */}
        <div className="project-card__copy">
          <p className="project-card__eyebrow">{project.eyebrow}</p>

          <p className="project-card__description">{project.description}</p>

          <section className="project-info-block project-info-block--tech">
            <span className="project-info-label">Tech Stack</span>

            <div className="project-tech-list">
              {Array.isArray(project.technologies) &&
              project.technologies.length > 0
                ? project.technologies.map((technology) => (
                    <span key={technology} className="project-tech-chip">
                      {technology}
                    </span>
                  ))
                : null}
            </div>
          </section>

          <div className="project-card__bottom-actions">
            <button
              type="button"
              className="project-cta project-cta--github"
              onClick={openGithub}
              disabled={!hasGithubUrl}
              aria-disabled={!hasGithubUrl}
              title={
                hasGithubUrl
                  ? 'Open GitHub repository'
                  : 'GitHub URL not added yet'
              }
            >
              <HiCodeBracket aria-hidden="true" />
              <span>View on GitHub</span>
              <HiArrowTopRightOnSquare aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="project-preview"
          aria-label={`${project.name} landing page preview`}
        >
          <span className="project-preview__ambient" aria-hidden="true" />

          <span className="project-preview__frame">
            {imageFailed ? (
              <span className="project-preview__fallback">
                <span>{project.name}</span>
                <small>Preview unavailable</small>
              </span>
            ) : (
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="eager"
                decoding="async"
                draggable="false"
                onError={() => setImageFailed(true)}
              />
            )}
          </span>
        </div>
      </div>
    </article>
  )
}

export default memo(ProjectCard)