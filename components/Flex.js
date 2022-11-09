import styled, {css} from "styled-components";

const getItemLayout = (val) => {
    const display = val === 0 ? "none" : "inherit";
    if (typeof val === "number") {
      const width = (100 / 12) * val;
      const ratio = width > 100 ? "100%" : width < 0 ? "0" : `${width}%`;
  
      return {
        flexGrow: 0,
        display,
        maxWidth: ratio,
        flexBasis: ratio
      };
    }
  
    return {
      flexGrow: 1,
      display,
      maxWidth: "100%",
      flexBasis: "0"
    };
  };

  const makeMediaQuery = (bp, col) => css`
  @media screen and (min-width: ${bp}) {
    ${getItemLayout(col)};
  }
`;


export const Grid = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 2 * ${props => props.theme.units['5']});
    margin: 0 calc(-1 * ${props => props.theme.units['5']});
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    flex-direction: ${({direction}) => direction};
    gap: ${({gap}) => gap};
`;

export const Column = styled.div`
  ${({ xs = 12 }) => getItemLayout(xs)};
  padding: ${props => props.theme.units['5']};

  ${props => props.sm && makeMediaQuery(props.theme.breakpoints.xs, props.sm)}
  ${props => props.md && makeMediaQuery(props.theme.breakpoints.sm, props.md)}
  ${props => props.lg && makeMediaQuery(props.theme.breakpoints.md, props.lg)}
  ${props => props.xl && makeMediaQuery(props.theme.breakpoints.lg, props.xl)}


`;

