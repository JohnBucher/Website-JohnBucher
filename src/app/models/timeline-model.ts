export class TimelineItem {
    image: string;
    name: string;
    positions: Position[];
    dates: string;
}

export class Position {
    title: string;
    descriptors: string[];
    dates: string;

    showDescriptors ? = false;
}
