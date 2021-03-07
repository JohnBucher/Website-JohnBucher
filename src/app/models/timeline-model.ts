export class TimelineItem {
    image: string;
    name: string;
    titles: TitleItem[];
    descriptors: string[];
    dates: string;

    showDescriptors ? = false;
}

export class TitleItem {
    name: string;
    dates: string;
}
