import NavBarComponent from "./navbar"
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import CarouselComponent from "./carousel"

export default function MainLayoutComponent(){
    let categoriesList  =[]
    for(let i=0;i<5; i++){
        categoriesList.push(
            <div className="h-48 w-48 border-opacity-45 border border-solid border-blue-200 rounded-2xl hover:bg-blue-100" key={`home-cat-${i}`}>

            </div>
        )
    }
    return (
        <div className="flex w-screen h-screen flex-col overflow-hidden">
            <NavBarComponent/>
            <div className="w-full h-10 flex-grow">
                <div className="flex flex-col w-full h-full">
                    <div className="h-4/6 w-full">
                    <CarouselComponent/>
                    </div>
                    <div className="flex-grow w-full p-5">
                        <h1 className="text-4xl">Categories to Explore</h1>
                        <div className="flex flex-row p-5 gap-6">
                            {categoriesList}
                            <button className=" flex flex-row items-center text-2xl gap-1 cursor-pointer hover:text-blue-500"><h1>All Categories</h1><ArrowRightCircleIcon className="h-8 w-8"/></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}