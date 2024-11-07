import { css } from "@emotion/react";
import { ILayoutProps } from "./types";

const Layout = ({ children }: ILayoutProps) => {
  return <div css={layoutStyle}>{children}</div>;
};

const Column = ({ children }: ILayoutProps) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

const Row = ({ children }: ILayoutProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      `}
    >
      {children}
    </div>
  );
};

Layout.Column = Column;
Layout.Row = Row;

export default Layout;
export { Column, Row };

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;
