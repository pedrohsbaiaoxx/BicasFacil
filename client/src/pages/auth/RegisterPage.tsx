import React from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Briefcase, Building2 } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Escolha o tipo de cadastro</CardTitle>
          <CardDescription>
            Selecione o tipo de conta que você deseja criar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/cadastrar/profissional">
              <Card className="h-full hover:bg-gray-50 cursor-pointer transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Briefcase className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-semibold">Profissional Autônomo</h3>
                    <p className="text-gray-600">
                      Cadastre-se como profissional autônomo para oferecer seus serviços
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/cadastrar/empresa">
              <Card className="h-full hover:bg-gray-50 cursor-pointer transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Building2 className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-semibold">Empresa</h3>
                    <p className="text-gray-600">
                      Cadastre sua empresa para expandir seus negócios
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 