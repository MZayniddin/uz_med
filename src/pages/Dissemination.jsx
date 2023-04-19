// COMPONENTS
import Description from "../components/description/Description";
import Table from "../components/table/Table";

// DATA
import data from "../data/dissemination.json";

export default function Dissemination() {
    return (
        <main>
            <Description data={data[0].data_page} />
            <Table data={data[0].data_table} />
        </main>
    );
}
