const UserAvatar=({ className=""}) => (
    <div className={`w-8 h-8 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center overflow-hidden ${className}`}>
        <img src="user.svg" alt="user" className="w-5 h-5 text-gray-400" />
    </div>
);

const Badge=({ text } : { text : string }) => (
    <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm z-10">
        {text}
    </div>
);

export default function TaskPage() {
    return (
        <section className="h-screen bg-gray-100 flex flex-col justify-center items-center gap-4">
            <div className="flex gap-4">
                <div className="bg-blue-200 p-8 h-72 w-110 rounded-4xl flex flex-col justify-between text-blue-900 relative">
                    <div className="flex gap-4">
                        <img src="/palette.svg" alt="Adobe Photoshop" />
                        <p className="font-bold">Adobe Photoshop</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">Adobe Photoshop</p>
                        <p className="font-bold">in 3 days</p>
                        <div className="absolute bottom-4 right-8">
                            <div className="flex -space-x-3 items-center">
                                <UserAvatar />
                                <UserAvatar />
                                <UserAvatar />
                                <Badge text="+3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative bg-green-200 p-8 h-72 w-110 rounded-4xl flex flex-col justify-between text-green-900">
                    <div className="absolute top-10 right-10">
                        <img src="/star.svg" alt="star" className="w-3 h-3" /> 
                    </div>
                    <div className="flex gap-4">
                        <img src="/terminal-2.svg" alt="AI" />
                        <p className="font-bold">AI</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">DALL·E, Midjourney, Stable Diffusion</p>
                        <p className="font-bold">in 5 days</p>
                        <div className="absolute bottom-4 right-8">
                            <div className="flex -space-x-3 items-center">
                                <UserAvatar />
                                <UserAvatar />
                                <UserAvatar />
                                <Badge text="+9" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
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
            </div>

            <div className="absolute bottom-6 right-6 text-gray-400 text-xl">
                <p>Day 020/365</p>
            </div>

            <div className="absolute top-12 left-12">
                <img src="/brand-baidu.svg" alt="Brand" className="w-8 h-8"/>
            </div>

        </section>
    )
}