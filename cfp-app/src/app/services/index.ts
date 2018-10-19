import { SpeakerService } from './speaker.service';
import { TalkService } from './talk.service';
import { from } from 'rxjs';

export const services: any[] = [
    SpeakerService,
    TalkService,
];

export * from './speaker.service';
export * from './talk.service';
