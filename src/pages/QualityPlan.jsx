// COMPONENTS
import Description from "../components/description/Description";
import Table from "../components/table/Table";

// DATA
import data from "../data/quality-plan.json";

export default function QualityPlan() {
    return (
        <main>
            <Description data={data[0].data_page} />
            <Table data={data[0].data_table} />
        </main>
    );
}
