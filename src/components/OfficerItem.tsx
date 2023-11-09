import type { FunctionComponent, ReactNode } from "react";

interface OfficerItemProps {
    name: string;
    description: string;
    children: ReactNode;
}

export const OfficerItem: FunctionComponent<OfficerItemProps> = ({
                                                                     name,
                                                                     children,
                                                                     description,
                                                                 }) => {
    return (
        <div className="h-[125px] w-full rounded-xl border-2 border-rc-darkblue p-2 text-rc-darkblue transition ease-in-out hover:bg-rc-darkblue hover:text-rc-yellow">
            <div className="flex h-[40%] items-center justify-center">{children}</div>
            <div className="flex h-[30%] flex-col justify-center">
                <h1 className="text-4xl font-bold">{name}</h1>
                <p className="text-lg font-semibold">{description}</p>
            </div>
        </div>
    );
};



/*
import type { FunctionComponent, ReactNode } from "react";
interface OfficerItemProps {
    name: string;
    description: string;
}

export const OfficerItem: React.FC<OfficerItemProps> = ({ name, description }) => {
    return (
        <div className="border border-rc-darkblue rounded-xl p-2 mb-2 text-rc-darkblue transition ease-in-out hover:bg-rc-darkblue hover:text-rc-yellow">
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="text-sm font-semibold">{description}</p>
        </div>
    );
};


const OfficerList: React.FC<{ officers: OfficerItemProps[] }> = ({ officers }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {officers.map((officer, index) => (
                <OfficerItem key={index} name={officer.name} description={officer.description} />
            ))}
        </div>
    );
};*/

//export default OfficerList;
