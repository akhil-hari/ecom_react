import NavBarComponent from "./navbar"
// import HomeComponent from "./home"
// import CategoryListComponent from './category_list'
import ProductListingComponent from "./products_listing"

export default function MainLayoutComponent(){
    
    return (
        <div className="flex w-screen h-screen flex-col overflow-hidden">
            <NavBarComponent/>
            <div className="w-full h-10 flex-grow">
                <ProductListingComponent/>

            </div>
            
        </div>
    )
}