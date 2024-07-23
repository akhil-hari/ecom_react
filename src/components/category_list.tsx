export default function CategoryListComponent(){
    let categoriesList  =[]
    for(let i=0;i<10; i++){
        categoriesList.push(
            <div className="w-64 h-64 border-opacity-45 border border-solid border-blue-200 rounded-2xl hover:bg-blue-100" key={`cat-list-item${i}`}></div>
        )
    }
    return (
        <div className="p-5">
        <h1 className="text-4xl">Categories to Explore</h1>
        <div className="my-10 flex flex-row flex-wrap gap-12">
            {categoriesList}

        </div>
        </div>
    )
}