export type SubjectId = 'biology' | 'physics' | 'chemistry';
export interface Experiment { id:string; title:string; subject:SubjectId; category:string; learningGoal:string; safetyLevel:'observe'|'classroom'|'teacher-supervised'; status:'planned'|'in-progress'|'interactive'; }
export interface TopicSection { id:string; title:string; topics:string[]; }
export const subjects:ReadonlyArray<{id:SubjectId;title:string;href:string}>=[{id:'biology',title:'Biology',href:'pages/biology.html'},{id:'physics',title:'Physics',href:'pages/physics.html'},{id:'chemistry',title:'Chemistry',href:'pages/chemistry.html'}];
