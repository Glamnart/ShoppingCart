const Header: React.FC = ()=>{
    return <div className="flex justify-center flex-col items-center bg-[url('src/assets/headerBackground.webp')] bg-cover bg-no-repeat bg-center h-75 font-bold bg-black/40 bg-blend-overlay text-white">
        <h1 className="text-6xl mb-5">Welcome to the Market Place</h1>
            <p className="text-2xl">What would you like to get?</p>
    </div>
}
export default Header