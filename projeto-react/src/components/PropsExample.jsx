// Component filho

import React from "react";

const PropsExample = ({nome, idade}) => {


    return (
        <div>

            <h3>Óla {nome}</h3>
            <p>Eu tenho {idade} anos</p>
        </div>
    );
};

export default PropsExample;