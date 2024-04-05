import { Icon } from "@phosphor-icons/react";
import * as HoverCard from "@radix-ui/react-hover-card";

type Props = {
    contactInfo: string,
    Icon: Icon
}

export default function HoverCardContact({ contactInfo, Icon }: Props) {
    return (
        <HoverCard.Root openDelay={100} closeDelay={100}>
            <HoverCard.Trigger asChild>
                <Icon size={36}/>
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content className="bg-black text-white rounded-full px-3 py-2">
                    <p>{contactInfo}</p>
                    <HoverCard.Arrow className="fill-black"/>
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}
