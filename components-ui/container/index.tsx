import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * This container is a wrapper arround `.fr-container` from the DSFR
 *
 * It can be use at any level of nesting inside the HTML tree, and will always
 * create a new outer container wrapper that takes the full width of the viewport, and
 * then create a `.fr-container` inside of it.
 *
 * It exposes a `className` and `style` props to allow for custom styling of the
 * outer container.
 *
 * This enable to style the outer container with a background color that spans the
 * full width of the viewport for instance.
 *
 */
export default function FullWidthContainer({
  children,
  style = {},
  className = '',
}: ContainerProps) {
  return (
    <>
      <div className="outer-outer-container">
        <div className={`${className} outer-container`} style={style}>
          <div className="fr-container">{children}</div>
        </div>
      </div>
      <style jsx>{`
        .outer-outer-container {
          display: flex;
          flex: 1 1 0%;
          justify-content: center;
        }
        .outer-container {
          flex: 1 1 0%;
          display: flex;
          flex-direction: column;
          min-width: 100vw;
        }
      `}</style>
    </>
  );
}
