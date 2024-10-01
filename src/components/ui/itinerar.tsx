'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Luggage, Wallet, FileText, Plus, Trash2 } from "lucide-react"

export default function Itinerary() {
  const [packingItems, setPackingItems] = useState([
    { id: 1, name: 'Passport', checked: false },
    { id: 2, name: 'Clothes', checked: false },
    { id: 3, name: 'Toiletries', checked: false },
  ])
  const [newPackingItem, setNewPackingItem] = useState('')

  const [itinerary, setItinerary] = useState([
    { id: 1, day: 'Day 1', activity: 'Arrival and hotel check-in' },
    { id: 2, day: 'Day 2', activity: 'City tour and local cuisine exploration' },
    { id: 3, day: 'Day 3', activity: 'Museum visit and shopping' },
  ])
  const [newItineraryDay, setNewItineraryDay] = useState('')
  const [newItineraryActivity, setNewItineraryActivity] = useState('')

  const [budget, setBudget] = useState([
    { id: 1, type: 'Total Budget', amount: 2000 },
    { id: 2, type: 'Spent', amount: 800 },
    { id: 3, type: 'Remaining', amount: 1200 },
  ])
  const [newBudgetType, setNewBudgetType] = useState('')
  const [newBudgetAmount, setNewBudgetAmount] = useState('')

  const [documents, setDocuments] = useState([
    { id: 1, name: 'Passport', details: 'Expires: 12/2025' },
    { id: 2, name: 'Visa', details: 'Approved: Valid for 6 months' },
    { id: 3, name: 'Travel Insurance', details: 'Policy Number: TI12345678' },
  ])
  const [newDocumentName, setNewDocumentName] = useState('')
  const [newDocumentDetails, setNewDocumentDetails] = useState('')

  const addItem = (type: 'packing' | 'itinerary' | 'budget' | 'documents') => {
    switch (type) {
      case 'packing':
        if (newPackingItem.trim() !== '') {
          setPackingItems([...packingItems, { id: Date.now(), name: newPackingItem, checked: false }])
          setNewPackingItem('')
        }
        break
      case 'itinerary':
        if (newItineraryDay.trim() !== '' && newItineraryActivity.trim() !== '') {
          setItinerary([...itinerary, { id: Date.now(), day: newItineraryDay, activity: newItineraryActivity }])
          setNewItineraryDay('')
          setNewItineraryActivity('')
        }
        break
      case 'budget':
        if (newBudgetType.trim() !== '' && !isNaN(parseFloat(newBudgetAmount))) {
          setBudget([...budget, { id: Date.now(), type: newBudgetType, amount: parseFloat(newBudgetAmount) }])
          setNewBudgetType('')
          setNewBudgetAmount('')
        }
        break
      case 'documents':
        if (newDocumentName.trim() !== '' && newDocumentDetails.trim() !== '') {
          setDocuments([...documents, { id: Date.now(), name: newDocumentName, details: newDocumentDetails }])
          setNewDocumentName('')
          setNewDocumentDetails('')
        }
        break
    }
  }

  const togglePackingItem = (id: number) => {
    setPackingItems(packingItems.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
  }

  const removeItem = (type: 'packing' | 'itinerary' | 'budget' | 'documents', id: number) => {
    switch (type) {
      case 'packing':
        setPackingItems(packingItems.filter(item => item.id !== id))
        break
      case 'itinerary':
        setItinerary(itinerary.filter(item => item.id !== id))
        break
      case 'budget':
        setBudget(budget.filter(item => item.id !== id))
        break
      case 'documents':
        setDocuments(documents.filter(item => item.id !== id))
        break
    }
  }

  const handleItemChange = (type: 'itinerary' | 'budget' | 'documents', id: number, field: string, value: string) => {
    switch (type) {
      case 'itinerary':
        setItinerary(itinerary.map(item =>
          item.id === id ? { ...item, [field]: value } : item
        ))
        break
      case 'budget':
        setBudget(budget.map(item =>
          item.id === id ? { ...item, [field]: parseFloat(value) } : item
        ))
        break
      case 'documents':
        setDocuments(documents.map(doc =>
          doc.id === id ? { ...doc, [field]: value } : doc
        ))
        break
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="itinerary" className="space-y-4">
        <TabsList className="items-center justify-center flex">
          <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
          <TabsTrigger value="packing">Packing List</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="itinerary">
          <Card>
            <CardHeader>
              <CardTitle>Trip Itinerary</CardTitle>
              <CardDescription>Plan your daily activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4" >
                {itinerary.map(item => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Input
                      value={item.day}
                      onChange={(e) => handleItemChange('itinerary', item.id, 'day', e.target.value)}
                      placeholder="Day"
                      className="flex-grow"
                    />
                    <Input
                      value={item.activity}
                      onChange={(e) => handleItemChange('itinerary', item.id, 'activity', e.target.value)}
                      placeholder="Activity"
                      className="flex-grow"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem('itinerary', item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <div className="flex space-x-2">
                  <Input
                    placeholder="New day"
                    value={newItineraryDay}
                    onChange={(e) => setNewItineraryDay(e.target.value)}
                  />
                  <Input
                    placeholder="New activity"
                    value={newItineraryActivity}
                    onChange={(e) => setNewItineraryActivity(e.target.value)}
                  />
                  <Button onClick={() => addItem('itinerary')}>
                    <Plus className="h-4 w-4 mr-2 text-xl" />
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="packing">
          <Card>
            <CardHeader>
              <CardTitle>Packing List</CardTitle>
              <CardDescription>Keep track of your packing progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {packingItems.map(item => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`item-${item.id}`}
                      checked={item.checked}
                      onCheckedChange={() => togglePackingItem(item.id)}
                    />
                    <Label htmlFor={`item-${item.id}`} className="flex-grow">{item.name}</Label>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem('packing', item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add new item"
                    value={newPackingItem}
                    onChange={(e) => setNewPackingItem(e.target.value)}
                  />
                    <Button onClick={() => addItem('packing')}>
                    <Plus className="h-4 w-4 mr-2 " />
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="budget">
          <Card>
            <CardHeader>
              <CardTitle>Trip Budget</CardTitle>
              <CardDescription>Manage your trip expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {budget.map(item => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Input
                      value={item.type}
                      onChange={(e) => handleItemChange('budget', item.id, 'type', e.target.value)}
                      placeholder="Type"
                      className="flex-grow"
                    />
                    <Input
                      type="number"
                      value={item.amount}
                      onChange={(e) => handleItemChange('budget', item.id, 'amount', e.target.value)}
                      placeholder="Amount"
                      className="flex-grow"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem('budget', item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <div className="flex space-x-2">
                  <Input
                    placeholder="Budget type"
                    value={newBudgetType}
                    onChange={(e) => setNewBudgetType(e.target.value)}
                  />
                  <Input
                    type="number"
                    placeholder="Amount"
                    value={newBudgetAmount}
                    onChange={(e) => setNewBudgetAmount(e.target.value)}
                  />
                  <Button onClick={() => addItem('budget')}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Important Documents</CardTitle>
              <CardDescription>Keep track of essential paperwork</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map(doc => (
                  <div key={doc.id} className="flex items-center space-x-2">
                    <Input
                      value={doc.name}
                      onChange={(e) => handleItemChange('documents', doc.id, 'name', e.target.value)}
                      placeholder="Document name"
                      className="flex-grow"
                    />
                    <Input
                      value={doc.details}
                      onChange={(e) => handleItemChange('documents', doc.id, 'details', e.target.value)}
                      placeholder="Document details"
                      className="flex-grow"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem('documents', doc.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <div className="flex space-x-2">
                  <Input
                    placeholder="Document name"
                    value={newDocumentName}
                    onChange={(e) => setNewDocumentName(e.target.value)}
                  />
                  <Input
                    placeholder="Document details"
                    value={newDocumentDetails}
                    onChange={(e) => setNewDocumentDetails(e.target.value)}
                  />
                  <Button onClick={() => addItem('documents')}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
