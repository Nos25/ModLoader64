import * as API from 'modloader64_api/MM/Imports'
import IMemory from 'modloader64_api/IMemory';

export class Player extends API.InstanceObj implements API.IPlayer {
    //subtract this.instance.Link from these values

    private current_form = 0x3FFEFB; 
    private link_actor = 0x3FFDB0;
    private link_animations_ptr = 0x779314;
    private link_xyz_pos = 0x3FFEB8; //Link's XYZ (last frame)
    private current_mask = 0x3FFF03; //Current equipped mask
    private current_anim = 0x3FFFF8; //Current animation ID
    private current_anim_length = 0x40004;
    private current_anim_pos = 0x400008;
    private current_anim_speed = 0x40000C;
    private get_item = 0x400134;
    private last_coord_ground = 0x400170;
    private give_magic_bar = 0x3830DC;
    private link_rotation = 0x3FFE6C;

    constructor(emu: IMemory) { super(emu, 0x3FFDB0); }
}