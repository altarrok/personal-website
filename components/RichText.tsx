import dynamic from 'next/dynamic';
import React from 'react';
import { Leaf } from '../collections/Projects';
import { Text } from 'slate';
import escapeHTML from 'escape-html';
import { Fragment } from 'react';

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
                <h1 key={i} className='text-5xl'>
                    {serialize(node.children)}
                </h1>
            );
        case 'h2':
            return (
                <h2 key={i} className='text-4xl'>
                    {serialize(node.children)}
                </h2>
            );
        case 'h3':
            return (
                <h3 key={i} className='text-3xl'>
                    {serialize(node.children)}
                </h3>
            );
        case 'h4':
            return (
                <h4 key={i} className='text-2xl'>
                    {serialize(node.children)}
                </h4>
            );
        case 'h5':
            return (
                <h5 key={i} className='text-xl'>
                    {serialize(node.children)}
                </h5>
            );
        case 'h6':
            return (
                <h6 key={i} className='text-lg'>
                    {serialize(node.children)}
                </h6>
            );
        case 'indent':
            return (
                <span key={i} className='pl-6 block'>
                    {serialize(node.children)}
                </span>
            );
        case 'ul':
            return (
                <ul key={i} className='list-disc list-inside'>
                    {serialize(node.children)}
                </ul>
            );
        case 'ol':
            return (
                <ol key={i} className='list-decimal list-inside'>
                    {serialize(node.children)}
                </ol>
            );
        case 'li':
            return (
                <li key={i}>
                    {serialize(node.children)}
                </li>
            );
        case 'link':
            return (
                <a
                    href={escapeHTML(node.url)}
                    key={i}
                >
                    {serialize(node.children)}
                </a>
            );
        case 'upload':
            return (
                <img
                    src={escapeHTML(node.value.url)}
                    alt={escapeHTML(node.value.alt)}
                    className='w-full'
                    key={i}
                />
            );

        default:
            return (
                <p key={i}>
                    {serialize(node.children)}
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