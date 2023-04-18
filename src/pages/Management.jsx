import React from "react";

// COMPONENTS
import Description from "../components/description/Description";

// DATA
import data from "../data/management.json";
import Table from "../components/table/Table";

const Management = () => {
    return (
        <main>
            <Description data={data[0].data_page} />
            <Table />
        </main>
    );
};

export default Management;
