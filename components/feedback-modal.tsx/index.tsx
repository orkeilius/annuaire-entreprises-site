import { useState } from 'react';
import { PrintNever } from '#components-ui/print-visibility';
type FeedbackType = 'bug' | 'idea' | 'data' | 'question';
export function FeedbackModal() {
  const [feedbackType, setFeedbackType] = useState('' as FeedbackType);
  const [feedbackContent, setFeedbackContent] = useState('' as string);
  const [showModal, setShowModal] = useState(false as boolean);

  const handleChangeFeedbackType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedbackType(e.target.value as FeedbackType);
  };
  return (
    <PrintNever>
      <div className="feedback-container">
        <button
          aria-label="Partager une idée, un bug, une question ou une donnée manquante avec l'équipe de l'Annuaire des Entreprises"
          onClick={() => setShowModal(!showModal)}
          aria-controls="feedback-modal"
          aria-haspopup="dialog"
          className="feedback-button"
          aria-expanded={showModal}
        >
          {!showModal ? (
            <Icon />
          ) : (
            <span aria-label="Fermer la fenêtre de retour" className="close">
              ×
            </span>
          )}
        </button>

        <dialog id="feedback-modal" open={showModal}>
          <button
            onClick={() => setShowModal(false)}
            className="fr-btn fr-btn--tertiary-no-outline fr-btn--sm"
            aria-label="Fermer la fenêtre de retour"
            aria-controls="feedback-modal"
            autoFocus
          >
            × Fermer
          </button>
          <form>
            <p className="fr-text--lg">
              <strong>👋 Bonjour</strong>
            </p>
            <fieldset className="feedbackType fr-input-group">
              <legend>
                Qu’aimeriez-vous partager avec l’équipe de l‘Annuaire des
                Entreprises&nbsp;?
              </legend>
              <input
                className="fr-sr-only"
                type="radio"
                onChange={handleChangeFeedbackType}
                id="feedback-bug"
                name="feedback"
                value="bug"
              />
              <label htmlFor="feedback-bug">Un bug ou un problème ?</label>
              <input
                className="fr-sr-only"
                type="radio"
                onChange={handleChangeFeedbackType}
                id="feedback-idee"
                name="feedback"
                value="idea"
              />
              <label htmlFor="feedback-idee">Une idée ou suggestion ?</label>
              <input
                className="fr-sr-only"
                type="radio"
                id="feedback-data"
                onChange={handleChangeFeedbackType}
                name="feedback"
                value="data"
              />
              <label htmlFor="feedback-data">
                Une donnée qui vous manque ?
              </label>
              <input
                className="fr-sr-only"
                type="radio"
                onChange={handleChangeFeedbackType}
                id="feedback-question"
                name="feedback"
                value="question"
              />
              <label htmlFor="feedback-question">Une question ?</label>
            </fieldset>
            {feedbackType && feedbackType !== 'question' && (
              <>
                <fieldset className="fr-input-group">
                  <label className="fr-label" htmlFor="feedback-textarea">
                    {
                      {
                        bug: '🐞 J’ai constaté un bug ou un problème',
                        idea: '💡 J’ai une idée ou une suggestion',
                        data: '🔍 Une donnée me manque',
                      }[feedbackType]
                    }
                  </label>
                  <textarea
                    id="feedback-textarea"
                    value={feedbackContent}
                    className="fr-input"
                    onChange={(e) => setFeedbackContent(e.target.value)}
                    placeholder="Dites-nous tout"
                  />
                </fieldset>

                <button
                  role="submit"
                  disabled={!feedbackContent}
                  className="fr-btn"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Envoyer
                </button>
              </>
            )}
          </form>
        </dialog>
      </div>

      <style jsx>
        {`
          .feedback-button {
            position: fixed;
            z-index: 1000;
            right: 3rem;
            bottom: 3rem;
            width: 60px;
            height: 60px;
            background-color: var(--background-action-high-blue-france);
            border: none;
            border-radius: 50%;
            padding: 1rem;
            color: white;
            box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.3);
            transition: margin 100ms ease-in-out, box-shadow 100ms ease-in-out;
          }
          .feedback-button .close {
            font-size: 2rem;
            font-weight: bold;
            line-height: 1rem;
          }
          .feedback-button:hover {
            background-color: var(--background-action-high-blue-france-hover);
          }
          .feedback-button:active {
            background-color: var(--background-action-high-blue-france-active);
          }

          dialog {
            overflow: hidden;
            padding: 0 1rem 1rem;
            transform: translateY(-10px);
            opacity: 0;
            box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.3);
            max-width: 400px;
            margin-right: 3rem;
            position: fixed;
            bottom: 150px;
            z-index: 1000;
            border: none;
            border-radius: 0.25rem;
            border: 1px solid var(--background-action-high-blue-france);
          }

          dialog:focus-within {
            outline-color: #0a76f6;
            outline-offset: 2px;
            outline-width: 2px;
          }

          dialog[open] {
            animation: fadeIn 0.3s ease-in-out forwards;
          }
          @keyframes fadeIn {
            from {
              transform: translateY(10px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          dialog > button:first-of-type {
            position: absolute;
            top: 0;
            right: 0;
          }

          fieldset {
            border: none;
            padding: 0;
          }
          .feedbackType legend {
            margin-bottom: 1rem;
          }

          .feedbackType label {
            display: block;
            background-color: var(--background-alt-blue-france);
            padding: 0.5rem 1rem;
            margin-bottom: 0.5rem;
            border-radius: 0.25rem;
          }
          .feedbackType label:hover {
            background-color: var(--background-alt-blue-france-hover);
          }
          .feedbackType label:active,
          .feedbackType label:checked {
            background-color: var(--background-alt-blue-france-active);
          }

          .feedbackType label:focus,
          .feedbackType input:focus-visible + label {
            outline-style: solid;
            outline-color: #0a76f6;
            outline-offset: 2px;
            outline-width: 2px;
          }
          input:checked + label {
            background-color: var(--background-alt-blue-france-active);
          }

          @media only screen and (min-width: 1px) and (max-width: 588px) {
            .feedback-button {
              right: 0.75rem;
              bottom: 0.75rem;
              transform: scale(0.8);
            }
            dialog {
              margin-right: 0;
              margin-left: 0;
              max-width: 100%;
              border-radius: 0;
              bottom: 0;
              right: 0;
              top: 0;
              height: 100%;
              border: none;
            }
          }
        `}
      </style>
    </PrintNever>
  );
}

function Icon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.5 0.5C29.3284 0.5 30 1.17157 30 2V23C30 23.8284 29.3284 24.5 28.5 24.5H6.6825L0 29.75V2C0 1.17157 0.671573 0.5 1.5 0.5H28.5ZM16.5 15.5H13.5V18.5H16.5V15.5ZM16.5 6.5H13.5V14H16.5V6.5Z"
        fill="white"
      />
    </svg>
  );
}
