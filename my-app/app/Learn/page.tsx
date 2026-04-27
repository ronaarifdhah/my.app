
export default function learnpage() {
    return (
    <section className="h-screen bg-gray-100 flex gap-4">
        <div className="bg-purple-300 p-8 h-72 w-72 rounded-4xl flex flex-col justify-between text-purple-900">
            <div className="flex gap-4">
                <img src="/palette.svg" alt="Design" />
                <p className="font-bold">Design</p>
            </div>
            <div>
                <p className="text-4xl font-bold">Figma</p>
                <p className="font-bold">8 Hours ago</p>
            </div>
        </div>

        <div className="bg-orange-200 p-8 h-72 w-72 rounded-4xl flex flex-col justify-between text-orange-800">
            <div className="flex gap-4">
                <img src="/code.svg" alt="Coding" />
                <p className="font-bold">Coding</p>
            </div>
            <div>
                <p className="text-4xl font-bold">Python</p>
                <p className="font-bold">2 Days ago</p>
            </div>
        </div>

        <div className="bg-red-300 p-8 h-72 w-72 rounded-4xl flex flex-col justify-between text-red-900">
            <div className="flex gap-4">
                <img src="/palette.svg" alt="Design" />
                <p className="font-bold">Design</p>
            </div>
            <div>
                <p className="text-4xl font-bold">Sketch</p>
                <p className="font-bold">4 Days ago</p>
            </div>
        </div>
    </section>

);

}