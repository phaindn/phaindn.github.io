import React from "react";
import classNames from "classnames";
import { IProject } from "@/app/@types/portfolio";
import styles from "./ProjectItem.module.css"
import Link from "@/app/icons/Link";
import Github from "@/app/icons/Github";

interface Props {
    item: IProject;
}
export default function ProjectItem({ item }: Props) {
    const {
        name,
        thumbnail,
        description,
        technologies,
        previewUrl,
        sourceUrl,
    } = item;

    return (
        <li className={classNames("", styles.container)}>
            <img className="min-w-full h-[260px] object-cover" src={thumbnail} alt={name} />
            <div className={classNames("text-left", styles.body)}>
                <h3 className="text-black text-[28px] font-medium leading-normal mb-4">{name}</h3>
                <p className="text-content text-[18px] font-light mb-3">{description}</p>
                <p className="text-content">
                    <span className="text-heading text-default font-normal">Tech stack: </span>
                    <span className="text-sm font-light">{technologies.join(', ')}</span>
                </p>
            </div>
            <div className={classNames("flex items-center justify-between gap-4 lg:gap-8 mt-auto p-7 pt-5", styles.footer)}>
                { previewUrl && (
                    <a href={previewUrl} className="flex items-center text-default font-normal text-black" target="_blank" rel="noopener noreferrer">
                        <Link width={20} height={20} />
                        <span className="ml-2">Live Preview</span>
                    </a>
                )}
                { sourceUrl && (
                    <a href={sourceUrl} className="flex items-center text-default font-normal text-black ml-auto" target="_blank" rel="noopener noreferrer">
                        <Github width={20} height={20} />
                        <span className="ml-2">View Code</span>
                    </a>
                )}
            </div>
        </li>
    )
}