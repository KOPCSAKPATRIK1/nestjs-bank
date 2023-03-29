import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import AccountDto from './dtos/account.dto';
import OwnerDto from './dtos/owner.dto';
import { Account } from './entities/account.entity';
import { Owner } from './entities/owner.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('/owner')
  async getOwners() {
    const ownerRep = this.dataSource.getRepository(Owner);
    return ownerRep.createQueryBuilder('owner').getMany();
  }

  @Get('/account')
  async getAccounts() {
    const accountRep = this.dataSource.getRepository(Account);
    return accountRep.createQueryBuilder('account').getMany();
  }

  @Post('/owner')
  async addOwner(@Body() ownerDto: OwnerDto) {
    const ownerRep = this.dataSource.getRepository(Owner);
    const owner = new Owner();
    owner.fullName = ownerDto.fullName;
    owner.business = ownerDto.business;
    await ownerRep.save(owner);
  }

  @Post('/account')
  async addAcoount(@Body() accountDto: AccountDto) {
    const accountRep = this.dataSource.getRepository(Account);
    const account = new Account();
    account.accountNumber = accountDto.accountNumber.toString();
    account.balance = accountDto.balance;
    await accountRep.save(account);
  }

  @Delete('/owner/:id')
  async deleteOwner(@Param('id') id: number) {
    const ownerRep = this.dataSource.getRepository(Owner);
    const owner = await ownerRep.findOneBy({ id });
    await ownerRep.remove(owner);
  }

  @Delete('/account/:id')
  async deleteaccount(@Param('id') id: number) {
    const accountRep = this.dataSource.getRepository(Account);
    const account = await accountRep.findOneBy({ id });
    await accountRep.remove(account);
  }
}
