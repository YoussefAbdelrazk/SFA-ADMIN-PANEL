'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';
import { Button } from './button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  className?: string;
}

export function TiptapEditor({ content, onChange, placeholder, className }: TiptapEditorProps) {
  const [linkUrl, setLinkUrl] = useState('');
  const [showLinkInput, setShowLinkInput] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: placeholder || 'ابدأ الكتابة...',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded',
        },
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px] p-4',
      },
    },
  });

  if (!editor) {
    return null;
  }

  const addLink = () => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkUrl('');
      setShowLinkInput(false);
    }
  };

  const removeLink = () => {
    editor.chain().focus().unsetLink().run();
  };

  const addImage = () => {
    const url = window.prompt('Enter image URL:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className={cn('border border-gray-300 rounded-md', className)}>
      {/* Toolbar */}
      <div className='border-b border-gray-300 p-2 flex flex-wrap gap-2'>
        {/* Undo/Redo */}
        <div className='flex gap-1'>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className='h-8 w-8 p-0'
          >
            ↶
          </Button>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className='h-8 w-8 p-0'
          >
            ↷
          </Button>
        </div>

        <div className='w-px h-6 bg-gray-300 mx-1' />

        {/* Text Style Dropdown */}
        <div className='flex gap-1'>
          <Select
            value={
              editor.isActive('heading', { level: 1 })
                ? 'h1'
                : editor.isActive('heading', { level: 2 })
                ? 'h2'
                : editor.isActive('heading', { level: 3 })
                ? 'h3'
                : editor.isActive('paragraph')
                ? 'paragraph'
                : 'normal'
            }
            onValueChange={value => {
              if (value === 'h1') {
                editor.chain().focus().toggleHeading({ level: 1 }).run();
              } else if (value === 'h2') {
                editor.chain().focus().toggleHeading({ level: 2 }).run();
              } else if (value === 'h3') {
                editor.chain().focus().toggleHeading({ level: 3 }).run();
              } else if (value === 'paragraph') {
                editor.chain().focus().setParagraph().run();
              } else {
                editor.chain().focus().setParagraph().run();
              }
            }}
          >
            <SelectTrigger className='w-32 h-8'>
              <SelectValue placeholder='Normal' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='normal'>Normal</SelectItem>
              <SelectItem value='h1'>Heading 1</SelectItem>
              <SelectItem value='h2'>Heading 2</SelectItem>
              <SelectItem value='h3'>Heading 3</SelectItem>
              <SelectItem value='paragraph'>Paragraph</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='w-px h-6 bg-gray-300 mx-1' />

        {/* Code/Blockquote */}
        <div className='flex gap-1'>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={cn(
              'h-8 px-3',
              editor.isActive('codeBlock')
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-300',
            )}
          >
            {'</>'}
          </Button>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={cn(
              'h-8 px-3',
              editor.isActive('blockquote')
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-300',
            )}
          >
            &quot;
          </Button>
        </div>

        <div className='w-px h-6 bg-gray-300 mx-1' />

        {/* Text Formatting */}
        <div className='flex gap-1'>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={cn(
              'h-8 w-8 p-0 font-bold',
              editor.isActive('bold')
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-300',
            )}
          >
            B
          </Button>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={cn(
              'h-8 w-8 p-0 italic',
              editor.isActive('italic')
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-300',
            )}
          >
            I
          </Button>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={cn(
              'h-8 w-8 p-0 underline',
              editor.isActive('underline')
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-300',
            )}
          >
            U
          </Button>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={cn(
              'h-8 w-8 p-0 line-through',
              editor.isActive('strike')
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-300',
            )}
          >
            S
          </Button>
        </div>

        <div className='w-px h-6 bg-gray-300 mx-1' />

        {/* Link */}
        <div className='flex gap-1'>
          {!showLinkInput ? (
            <Button
              type='button'
              variant='outline'
              size='sm'
              onClick={() => setShowLinkInput(true)}
              className={cn(
                'h-8 px-3',
                editor.isActive('link')
                  ? 'border-2 border-blue-500 bg-blue-50'
                  : 'border border-gray-300',
              )}
            >
              Link
            </Button>
          ) : (
            <div className='flex gap-1'>
              <Input
                type='url'
                placeholder='Enter URL'
                value={linkUrl}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLinkUrl(e.target.value)}
                className='h-8 w-32'
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  e.key === 'Enter' && addLink()
                }
              />
              <Button type='button' size='sm' onClick={addLink} className='h-8 px-3'>
                Add
              </Button>
              <Button
                type='button'
                variant='outline'
                size='sm'
                onClick={() => setShowLinkInput(false)}
                className='h-8 px-3'
              >
                Cancel
              </Button>
            </div>
          )}
          {editor.isActive('link') && (
            <Button
              type='button'
              variant='destructive'
              size='sm'
              onClick={removeLink}
              className='h-8 px-3'
            >
              Remove
            </Button>
          )}
        </div>

        <div className='w-px h-6 bg-gray-300 mx-1' />

        {/* Lists */}
        <div className='flex gap-1'>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={cn(
              'h-8 w-8 p-0',
              editor.isActive('bulletList')
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-300',
            )}
          >
            •
          </Button>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={cn(
              'h-8 w-8 p-0',
              editor.isActive('orderedList')
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-300',
            )}
          >
            1.
          </Button>
        </div>

        <div className='w-px h-6 bg-gray-300 mx-1' />

        {/* Text Alignment */}
        <div className='flex gap-1'>
          <Select
            value={
              editor.isActive({ textAlign: 'left' })
                ? 'left'
                : editor.isActive({ textAlign: 'center' })
                ? 'center'
                : editor.isActive({ textAlign: 'right' })
                ? 'right'
                : editor.isActive({ textAlign: 'justify' })
                ? 'justify'
                : 'left'
            }
            onValueChange={value => {
              if (value === 'left') {
                editor.chain().focus().setTextAlign('left').run();
              } else if (value === 'center') {
                editor.chain().focus().setTextAlign('center').run();
              } else if (value === 'right') {
                editor.chain().focus().setTextAlign('right').run();
              } else if (value === 'justify') {
                editor.chain().focus().setTextAlign('justify').run();
              }
            }}
          >
            <SelectTrigger className='w-32 h-8'>
              <SelectValue placeholder='Left Align' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='left'>Left Align</SelectItem>
              <SelectItem value='center'>Center Align</SelectItem>
              <SelectItem value='right'>Right Align</SelectItem>
              <SelectItem value='justify'>Justify</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='w-px h-6 bg-gray-300 mx-1' />

        {/* Image */}
        <div className='flex gap-1'>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={addImage}
            className='h-8 px-3 border border-gray-300'
          >
            🖼️
          </Button>
        </div>

        <div className='w-px h-6 bg-gray-300 mx-1' />

        {/* Text Color */}
        <div className='flex gap-1'>
          <input
            type='color'
            onChange={e => editor.chain().focus().setColor(e.target.value).run()}
            className='w-8 h-8 rounded border border-gray-300 cursor-pointer'
            title='Text Color'
          />
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={() => editor.chain().focus().unsetColor().run()}
            className='h-8 w-8 p-0 border border-gray-300'
          >
            A
          </Button>
        </div>

        <div className='w-px h-6 bg-gray-300 mx-1' />

        {/* Highlight */}
        <div className='flex gap-1'>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={cn(
              'h-8 w-8 p-0',
              editor.isActive('highlight')
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-300',
            )}
          >
            H
          </Button>
        </div>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  );
}
