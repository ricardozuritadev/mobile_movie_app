import { ImageBackground } from "expo-image";
import { Tabs } from "expo-router";

import { images } from "@/constants/images";
import { Image } from "react-native";

export default function _layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <ImageBackground
                                source={images.highlight}
                                className=""
                            >
                                <Image
                                    source={images.highlight}
                                    tintColor="#151312"
                                    className="size-5"
                                />
                            </ImageBackground>
                        </>
                    )
                }}
            />

            <Tabs.Screen
                name="saved"
                options={{
                    title: "Saved",
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false
                }}
            />
        </Tabs>
    );
}
