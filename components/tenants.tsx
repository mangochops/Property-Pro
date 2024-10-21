import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Tenants() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">0714 161 618</p>
        </div>
        <div className="ml-auto font-medium">Servants Quater</div>
        <div className="ml-auto font-medium">Rm.A1</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jackson Lee</p>
          <p className="text-sm text-muted-foreground">0112 396 469</p>
        </div>
        <div className="ml-auto font-medium">Bedsitter</div>
        <div className="ml-auto font-medium">Rm.A2</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
          <p className="text-sm text-muted-foreground">0715 116 415</p>
        </div>
        <div className="ml-auto font-medium">3 Bedroom</div>
        <div className="ml-auto font-medium">Rm.A3</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <p className="text-sm text-muted-foreground">0721 334 047</p>
        </div>
        <div className="ml-auto font-medium">1 Bedroom</div>
        <div className="ml-auto font-medium">Rm.A4</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-sm text-muted-foreground">0713 730 284</p>
        </div>
        <div className="ml-auto font-medium">2 Bedroom</div>
        <div className="ml-auto font-medium">Rm.A5</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>KJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Kelvin Johnson</p>
          <p className="text-sm text-muted-foreground">0713 730 284</p>
        </div>
        <div className="ml-auto font-medium">2 Bedroom</div>
        <div className="ml-auto font-medium">Rm.A6</div>
      </div>
    </div>
  );
}