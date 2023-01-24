

function FarmerSidebar() {

    return (
        <div className="sidebar-container" >
            <nav class="nav flex-column w-25 p-4">
                <a class="nav-link active" aria-current="page" href="#">My Profile</a>
                <a class="nav-link" href="/add-donation">Add Donation</a>
                <a class="nav-link" href="/sellproduct">Sell</a>
                <a class="nav-link" href="/buyproduct">Purchase</a>
            </nav>
        </div>
    )
}
export default FarmerSidebar;