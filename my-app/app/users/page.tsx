export default function TaskPage() {
    return (
        <section className="bg-gray-100 h-screen flex flex-col justify-center items-center">
            <div className="bg-gray-200 p-8 h-150 w-130 rounded-4xl flex flex-col justify-start gap-10 text-gray-900 relative">
                <div className="flex gap-4 justify-between">
                    <p className="font-bold text-2xl">Clients details</p>
                    <img src="x.svg" alt="x" className="w-7 h-7"/>
                </div>
                <div className="flex justify-start gap-3">
                    <div>
                        <img src="https://randomuser.me/api/portraits/women/70.jpg" alt="user" className="w-16 h-16 rounded-full bg-white border-2 border-white" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold">Cornelius Greenfelder</p>
                        <div className="bg-green-300 h-7 w-24 flex justify-center items-center gap-1 rounded-4xl">
                            <img src="rosette-discount-check.svg" alt="verified" className="h-5 w-5"/>
                            <p className="text-bold">Verified</p>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-50 rounded-2xl flex flex-col gap-1">
                    <div className="p-4 flex flex-col gap-3">
                        <div>
                            <p>Projects</p>
                        </div>
                        <div className="flex justify-start">
                            <img src="hourglass-empty.svg" alt="hourglass" className="w-4 h-4"/>
                            <p>Ongoing</p>
                        </div>
                        <div className="flex justify-start">
                            <p>2</p>
                            <p className="text-gray-800">($3.8k)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}