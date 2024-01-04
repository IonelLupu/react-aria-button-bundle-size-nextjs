'use client'
import { Button, ListBox, ListBoxItem, Popover, Select as RASelect, SelectValue } from 'react-aria-components'
import { ComponentProps, ReactNode } from 'react'
import clsx from 'clsx'

export default function OtherPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <Select items={[]}></Select>
        </div>
    )

}

function Select({
    items,
    className,
    selectClassName,
    popoverClassName,
    selector,
    ...rest
}: ComponentProps<typeof RASelect> & {
    selectClassName?: string
    popoverClassName?: string
    items: any[]
    selector?: ReactNode
}) {
    return (
        <RASelect className={`flex flex-col gap-1 ${selectClassName ?? 'w-[200px]'}`} {...rest}>
            {selector ?? (
                <Button
                    className={clsx(
                        'flex items-center rounded-xl border border-stone-400 border-solid bg-white duration-100 py-2 px-2 text-left',
                        'focus:outline-none focus-visible:ring focus:ring-forest-50'
                    )}
                >
                    <SelectValue className={`flex-1 truncate data-[placeholder]:text-stone-400`}/>
                </Button>
            )}
            <Popover
                placement="bottom"
                className={clsx(
                    'overflow-auto rounded-xl bg-white shadow-lg ring-1 ring-stone-200  origin-top fill-mode-forwards',
                    'entering:animate-in entering:fade-in entering:zoom-in-95',
                    'exiting:animate-out exiting:fade-out exiting:zoom-out-95',
                    popoverClassName ?? 'max-h-60 w-[--trigger-width]'
                )}
            >
                <SelectListBox items={items}/>
            </Popover>
        </RASelect>
    )
}

function SelectListBox({items, className, ...rest}: ComponentProps<typeof ListBox> & {items: any[]}) {
    return (
        <ListBox className={clsx('outline-none p-1', className)} items={items} selectionMode="single" {...rest}>
            {item => (
                <ListBoxItem
                    textValue={String(item.id)}
                    className="group flex items-center gap-2 cursor-pointer rounded-xl select-none py-2 px-4 outline-none focus:bg-stone-100"
                >
                    {({isSelected}) => (
                        <>
                            <span className="flex-1 flex items-center gap-2 truncate font-normal group-selected:font-medium">
                                {item.name}
                            </span>
                        </>
                    )}
                </ListBoxItem>
            )}
        </ListBox>
    )
}

