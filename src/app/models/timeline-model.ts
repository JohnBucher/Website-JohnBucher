export class TimelineItem {
    image: string;
    name: string;
    titles: TitleItem[];
    descriptors: string[];

    showDescriptors ? = false;
}

export class TitleItem {
    name: string;
    dates: string;
}
