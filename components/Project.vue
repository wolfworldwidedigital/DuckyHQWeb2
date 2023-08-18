<template>
    <div class="h-fit w-full flex gap-[64px]">
        <h1 class="text-[30px] font-medium">Name</h1>
        <div class="flex flex-col gap-[16px]">
            <p class="text-[18px]">Description. Description. Description. Description. Description. Description. </p>
            <div class="flex gap-[32px]">
                <div class="flex gap-[8px] place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer">
                    <p class="text-[13px]">Learn More</p>
                    <nuxt-icon name="link" />
                </div>
                <div class="flex gap-[8px] place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer">
                    <p class="text-[13px]">Website</p>
                    <nuxt-icon name="link" />
                </div>
            </div>
        </div>
    </div>
</template>