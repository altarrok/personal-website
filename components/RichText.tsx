import dynamic from 'next/dynamic';
import React from 'react';
import { Text } from 'slate';
import escapeHTML from 'escape-html';
import { Fragment } from 'react';

export type Leaf = {
	type: string
	value?: {
		url: string
		alt: string
	}
	children?: Leaf[]
	url?: string
	[key: string]: unknown
}

const serialize = (children: Leaf[]) => children.map((node, i) => {
    if (!node) {
        return null;
    }

    if (Text.isText(node)) {
        let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />;

        if (node.bold) {
            text = (
                <strong key={i}>
                    {text}
                </strong>
            );
        }

        if (node.code) {
            text = (
                <code key={i}>
                    {text}
                </code>
            );
        }

        if (node.italic) {
            text = (
                <em key={i}>
                    {text}
                </em>
            );
        }

        if (node.underline) {
            text = (
                <span
                    className='underline'
                    key={i}
                >
                    {text}
                </span>
            );
        }

        if (node.strikethrough) {
            text = (
                <span
                    className='line-through'
                    key={i}
                >
                    {text}
                </span>
            );
        }

        return (
            <Fragment key={i}>
                {text}
            </Fragment>
        );
    }

    switch (node.type) {
        case 'h1':
            return (
                <h1 key={i} className='text-5xl mt-6 mb-4'>
                    {serialize(node.children || [])}
                </h1>
            );
        case 'h2':
            return (
                <h2 key={i} className='text-4xl mt-6 mb-3'>
                    {serialize(node.children || [])}
                </h2>
            );
        case 'h3':
            return (
                <h3 key={i} className='text-3xl mt-6 mb-2'>
                    {serialize(node.children || [])}
                </h3>
            );
        case 'h4':
            return (
                <h4 key={i} className='text-2xl mt-6 mb-1'>
                    {serialize(node.children || [])}
                </h4>
            );
        case 'h5':
            return (
                <h5 key={i} className='text-xl mt-6 mb-1'>
                    {serialize(node.children || [])}
                </h5>
            );
        case 'h6':
            return (
                <h6 key={i} className='text-lg mt-6 mb-1'>
                    {serialize(node.children || [])}
                </h6>
            );
        case 'indent':
            return (
                <span key={i} className='pl-6 block'>
                    {serialize(node.children || [])}
                </span>
            );
        case 'ul':
            return (
                <ul key={i} className='list-disc list-inside my-2'>
                    {serialize(node.children || [])}
                </ul>
            );
        case 'ol':
            return (
                <ol key={i} className='list-decimal list-inside my-2'>
                    {serialize(node.children || [])}
                </ol>
            );
        case 'li':
            return (
                <li key={i}>
                    {serialize(node.children || [])}
                </li>
            );
        case 'link':
            return (
                <a
                    href={escapeHTML(node.url)}
                    key={i}
                    className='text-blue-400 hover:text-blue-500 transition-all'
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    {serialize(node.children || [])}
                </a>
            );
        case 'upload':
            return (
                <img
                    src={escapeHTML(node.value!.url)}
                    alt={escapeHTML(node.value!.alt)}
                    className='max-w-full rounded-xl border border-solid border-black my-2'
                    key={i}
                />
            );

        default:
            return (
                <p key={i}>
                    {serialize(node.children || [])}
                </p>
            );
    }
});

const RichText: React.FC<{ content?: Leaf[] }> = ({ content }) => (
    <>
        {content ? serialize(content) : "Working on putting out details on this project :)"}
    </>
);

export default dynamic(() => Promise.resolve(RichText), {
    ssr: false,
})