// Illustration from: https://www.svgrepo.com/svg/517014/igloo
type IglooIconProps = React.ComponentProps<"svg">;

export default function IglooIcon(props: IglooIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            viewBox="0 0 48 48"
            className="fill-none"
            stroke="currentColor"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M4.5 35.758s1.313-10.182 5.639-10.182c4.627 0 5.895 10.202 5.895 10.202"></path>
            <path d="m9.838 25.576 5.558.03c4.627 0 5.976 10.181 5.976 10.181"></path>
            <path d="M10.062 25.302A16.941 16.941 0 0 1 43.5 29.155v6.493l-22.129.14M21.372 35.788 4.5 35.758"></path>
            <path d="M14.982 16.787h7.177v-3.775M22.16 16.787h8.292v-4.12M11.59 21.218h7.284v-4.431M18.874 21.218h7.488v-4.431M26.362 21.218h7.527v-4.431M20.415 31.014h5.934v-4.72M26.349 31.014h7.495v-4.72M33.844 31.014h6.844v-4.72M17.36 26.295h4.894v-5.077"></path>
            <path d="M22.254 26.295H30.4v-5.077M30.4 26.295h6.928v-5.077M37.328 26.295h5.931M15.396 25.606v-4.388M30.468 35.706v-4.692M37.254 35.664v-4.65M37.254 31.014H43.5M33.889 21.218h7.639M30.452 16.787h7.684M14.936 31.014h6.278M7.24 35.758c0-2.104 2.837-14.526 6.298.015"></path>
        </svg>
    );
}
