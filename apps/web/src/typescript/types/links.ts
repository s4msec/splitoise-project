type ReportStatus = {
    hour: string;
    when: Date;
}

type Link = {
    id: number;
    splitId: number;
    url: string;
    type: number;
    prob: number;
    ecpm: number;
    hidden?: boolean;
    isNew?: boolean;
    reportStatus?: ReportStatus | null;
    isDelayed?: boolean;
};  