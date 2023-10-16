import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Image, Skeleton } from "@nextui-org/react";
import { apiUrl } from "@/public/apiUrl.tsx";
import { ThreeBody } from "@uiball/loaders";


async function fetchData(id: string) {
    console.log(process.env.NODE_ENV);
    try {
        // 获取当前时间戳
        const timestamp = new Date().getTime()
        const response = await fetch(`${apiUrl}/playlist/track/all?id=${id}&timestamp=${timestamp}&limit=18`, { credentials: 'include' });

        if (!response.ok) {
            if (response.status === 404) {
                console.error('Data not found');
            } else {
                console.info('Network response was not ok');
            }
        }
        const responseBody = await response.json();

        return responseBody?.songs || [];
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}


// 接受传递的列表 id，和设置当前音乐id的方法 setCurrentId()
export default function RankIndex({ id, setCurrentId, setCurrentSongData }: {
    id: string,
    setCurrentId: (id: string) => void,
    setCurrentSongData: (data: any) => void
}) {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData(id)
            .then(
                (data) => {
                    setList(data); // 将新的列表设置为状态变量的值
                    setLoading(false)
                }
            )
    }, [])
    if (loading) {
        return (
            <div className="flex flex-row justify-center items-center">
                <ThreeBody
                    size={35}
                    speed={1.1}
                    color="black"
                />
            </div>
        )
    }

    return (
        // <div className="overflow-x-auto gap-2 grid grid-cols-3 z-0  md:grid-cols-3 lg:grid-cols-6 ">
        <div className="flex overflow-x-auto overflow-scroll space-x-2">
            {list.slice(0, 12).map((item: any, index) => (
                <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onClick={() => {
                        setCurrentId(item.id);
                        setCurrentSongData(item);
                    }} // 设置当前播放的音乐 id
                    className="flex-none w-1/3 md:w-1/6 lg:w-1/6"
                >
                    <CardBody className="overflow-visible scrollbar-hide p-0 z-0">
                        <Image
                            isZoomed
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.name}
                            className="w-full object-cover h-[20%px]"
                            src={item.al.picUrl}
                        />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                        <div className="whitespace-nowrap overflow-scroll scrollbar-hide w-full">
                            <p>{item.name}</p>
                            <p className="text-default-500">{item.ar[0].name}</p>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

