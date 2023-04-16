import React from "react";

// COMPONENTS
import Description from "../components/description/Description";

// DATA
import data from "../data/management.json";

const Management = () => {
    return (
        <main>
            <Description data={data[0].data_page} />
        </main>
    );
};

export default Management;
