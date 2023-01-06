import styled from "styled-components/macro";

const Spacer = styled.div`
    margin-top: ${props => props.height};
    width: ${props => props.width ? props.width : 0};
`;

export default Spacer;