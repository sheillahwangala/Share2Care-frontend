import FarmProduce from "../products/FarmProducts";
import FarmerSidebar from "./FarmerSideBar";

function FarmersPage (){

    return(
        <div className="farmerspage">
            <FarmerSidebar />
            <FarmProduce />
        </div>
    )

}
export default FarmersPage;