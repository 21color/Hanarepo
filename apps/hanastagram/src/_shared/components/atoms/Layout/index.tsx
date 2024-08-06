import { css } from "@emotion/react";
import { ILayoutProps } from "./types";

const Layout = ({ children }: ILayoutProps) => {
  return <div css={layoutStyle}>{children}</div>;
};

export default Layout;

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;
