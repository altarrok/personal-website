import styled from "@emotion/styled";
import React from "react"

const Para = styled.div`
`

const Paragraph = ({ paragrapghes }) => {
    return (
        <Para>
            { paragrapghes.map((para) => <p>{para}</p>)}
        </Para>
    );
}

export default Paragraph